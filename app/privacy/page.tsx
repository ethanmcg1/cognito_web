export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative pt-32 pb-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <p className="text-emerald-400 text-sm font-medium tracking-wide">COGNITO UPDATES</p>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Your privacy matters. Learn how we protect and handle your information.
            </p>
            <div className="flex items-center justify-center gap-3 text-gray-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-medium">Last Updated: November 21, 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-b from-slate-900/50 to-slate-900/30 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12 mb-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="p-8 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-500/20 mb-12">
              <p className="text-lg text-gray-300 leading-relaxed m-0">
                This Privacy Policy explains how Cognito Updates ("we," "our," "us") collects, uses, and protects information when you use our website or participate in our Discord community ("Services").
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10 mb-16">
              <p className="text-gray-400 m-0">
                By using our Services, you agree to the terms described below.
              </p>
            </div>

            <div className="space-y-8">
              <section className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-4 mt-0">Information We Collect</h2>
                      <p className="text-gray-400 mb-6">
                        We only collect information that is necessary for operating and improving our Services. This may include:
                      </p>

                      <div className="mb-6 bg-white/5 rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-3 mt-0">
                          <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-sm">a</span>
                          Information You Provide
                        </h3>
                        <ul className="space-y-3 list-none pl-0">
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Email addresses for newsletter subscriptions</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Payment information processed securely through Stripe</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Discord username and profile information</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Messages and content you share in our community</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Any information you voluntarily submit on our website (e.g., forms)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-3 mt-0">
                          <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-sm">b</span>
                          Automatically Collected Information
                        </h3>
                        <p className="text-gray-400 mb-4">
                          When you access our website, standard data may be collected automatically, such as:
                        </p>
                        <ul className="space-y-3 list-none pl-0 mb-4">
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>IP address</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Browser type</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Device information</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Basic usage data (e.g., pages visited)</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">→</span>
                            <span>Cookies for authentication and checkout functionality</span>
                          </li>
                        </ul>
                        <p className="text-gray-500 text-sm m-0">
                          Discord and Stripe may also collect data according to their own privacy policies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-4 mt-0">How We Use Your Information</h2>
                      <p className="text-gray-400 mb-6">We use collected information to:</p>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-4">
                        <ul className="space-y-4 list-none pl-0 m-0">
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">✓</span>
                            <span>Operate and maintain our Services</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">✓</span>
                            <span>Maintain community safety and moderation</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">✓</span>
                            <span>Communicate updates or important notices</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">✓</span>
                            <span>Improve user experience</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-emerald-500 mt-1">✓</span>
                            <span>Prevent fraud, abuse, or violations of our Terms</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-gray-500 text-sm bg-emerald-500/5 rounded-lg p-4 border border-emerald-500/20 m-0">
                        We do not use your information for advertising or tracking across other sites.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-4 mt-0">Sharing of Information</h2>
                      <div className="p-5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 mb-6">
                        <p className="text-cyan-300 font-medium m-0">
                          We do not sell, trade, or share your personal information with third parties.
                        </p>
                      </div>
                      <p className="text-gray-400 mb-4">We may only share information if required to:</p>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-4">
                        <ul className="space-y-3 list-none pl-0 m-0">
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-cyan-500 mt-1">•</span>
                            <span>Comply with the law</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-cyan-500 mt-1">•</span>
                            <span>Respond to legal requests</span>
                          </li>
                          <li className="flex items-start gap-3 text-gray-300">
                            <span className="text-cyan-500 mt-1">•</span>
                            <span>Protect the safety or rights of our users or community</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-gray-500 text-sm m-0">
                        Discord may have access to information stored on their platform; their policies apply as well.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-orange-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-4 mt-0">Data Security</h2>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <p className="text-gray-300 mb-4">
                          We take reasonable steps to protect your information from unauthorized access, loss, or misuse.
                        </p>
                        <p className="text-gray-400 m-0">
                          However, no online platform is 100% secure, so we cannot guarantee absolute protection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-teal-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-4 mt-0">Data Retention</h2>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <p className="text-gray-300 mb-4">
                          We keep information only as long as necessary to operate our Services.
                          This may include stored chat messages or logs used for moderation.
                        </p>
                        <p className="text-gray-400 m-0">
                          Users may request deletion of certain information where applicable and feasible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-pink-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                      <span className="text-2xl font-bold text-white">6</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-4 mt-0">Children's Privacy</h2>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <p className="text-gray-300 mb-4">
                          Our Services are intended for users 13 years and older.
                          We do not knowingly collect personal information from children under 13.
                        </p>
                        <p className="text-gray-400 m-0">
                          If such information is discovered, it will be deleted promptly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-violet-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                      <span className="text-2xl font-bold text-white">7</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-4 mt-0">Third-Party Services</h2>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <p className="text-gray-300 mb-4">
                          Our Services may link to or rely on third-party platforms such as Discord and Stripe for payments.
                          Their privacy practices are separate from ours, and we are not responsible for their policies.
                        </p>
                        <p className="text-gray-400 m-0">
                          Please review Discord's and Stripe's privacy policies directly for more details.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-500/0 via-slate-500/5 to-slate-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-slate-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-500/30">
                      <span className="text-2xl font-bold text-white">8</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-4 mt-0">Changes to This Privacy Policy</h2>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <p className="text-gray-300 mb-4">
                          We may update this Privacy Policy from time to time.
                        </p>
                        <p className="text-gray-400 m-0">
                          Continued use of our Services after changes are posted signifies acceptance of the updated policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
