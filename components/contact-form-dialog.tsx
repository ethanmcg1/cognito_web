"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'

interface ContactFormDialogProps {
  triggerText?: string
  triggerClassName?: string
}

export function ContactFormDialog({ triggerText = "Enquire", triggerClassName }: ContactFormDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error: insertError } = await supabase
        .from('contact_enquiries')
        .insert([formData])

      if (insertError) throw insertError

      const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-enquiry-email`
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        console.error('Email notification failed, but enquiry was saved')
      }

      toast.success('Thank you! We\'ll be in touch soon.')
      setFormData({ name: '', email: '', phone: '' })
      setIsOpen(false)
    } catch (error) {
      console.error('Error submitting enquiry:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-zinc-950 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Get in Touch</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-zinc-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-zinc-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-zinc-900 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
