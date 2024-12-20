"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="container mx-auto mb-36  px-4 py-16 max-w-6xl">
      <div className="text-center mb-12 space-y-4">
        <span className="text-sm text-primary uppercase tracking-wider">
          Contact us
        </span>
        <h2 className="h2 ">HAVE A PROJECT?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr,auto] gap-12">
        <div className="bg-ace p-8 rounded-lg shadow-sm">
          <form className="space-y-6 bg-accent p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                placeholder="Your Name"
                className="bg-background border-muted"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background border-muted"
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-background border-muted"
            />
            <Textarea
              placeholder="Message"
              className="min-h-[200px] bg-background border-muted resize-none"
            />
            <Button type="submit" className="bg-primary text-white px-8">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-8 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-2 rounded-full text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Address:</h3>
                <p className="text-muted-foreground">
                  198 West 21th Street, Suite 721
                  <br />
                  New York NY 10016
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary p-2 rounded-full text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone:</h3>
                <p className="text-primary">+ 1235 2355 98</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary p-2 rounded-full text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email:</h3>
                <p className="text-primary">info@yoursite.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary p-2 rounded-full text-white">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Website:</h3>
                <p className="text-primary">yoursite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      {/* <div className="mt-16">
        <GoogleMap
          apiKey="YOUR_API_KEY"
          placeId="ChIJN1t_tDeuEmsRUsoyG83frY4"
        />
      </div> */}
    </div>
  );
}
