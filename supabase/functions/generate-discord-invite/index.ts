import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const DISCORD_BOT_TOKEN = Deno.env.get('DISCORD_BOT_TOKEN');
const DISCORD_GUILD_ID = Deno.env.get('DISCORD_GUILD_ID');

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { email } = await req.json();

    if (!DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID) {
      throw new Error('Discord configuration missing');
    }

    const inviteResponse = await fetch(
      `https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}/invites`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 1,
          unique: true,
          temporary: false,
        }),
      }
    );

    if (!inviteResponse.ok) {
      const error = await inviteResponse.text();
      throw new Error(`Discord API error: ${error}`);
    }

    const invite = await inviteResponse.json();
    const inviteUrl = `https://discord.gg/${invite.code}`;

    return new Response(
      JSON.stringify({ inviteUrl }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error generating Discord invite:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to generate invite' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
