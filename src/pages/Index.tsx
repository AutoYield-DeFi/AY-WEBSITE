import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import * as React from "react"

import { BlogTokenGenerator } from '@/components/BlogTokenGenerator';

// Inside your Index component, add the BlogTokenGenerator at an appropriate location
// For example, near the end of the page, before the Footer:

// This is just an example location - integrate it where it makes sense in your actual app
const Index = () => {
  return (
    <>
      <section className="container grid items-center gap-6 py-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Beautifully designed components built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And MIT licensed.
          </p>
        </div>
        <div className="flex gap-4">
          <Button>Documentation</Button>
          <Button variant="outline">GitHub</Button>
        </div>
      </section>
      <section className="container grid items-center justify-center gap-6 py-8 md:py-10">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>UI Components</CardTitle>
              <CardDescription>
                Beautifully designed components that you can copy and paste into
                your apps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Built with Radix UI and Tailwind CSS. Accessible and
                customizable.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>UI Components</CardTitle>
              <CardDescription>
                Beautifully designed components that you can copy and paste into
                your apps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Built with Radix UI and Tailwind CSS. Accessible and
                customizable.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>UI Components</CardTitle>
              <CardDescription>
                Beautifully designed components that you can copy and paste into
                your apps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Built with Radix UI and Tailwind CSS. Accessible and
                customizable.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="container grid items-center justify-center gap-6 py-8 md:py-10">
        <h2 className="text-2xl font-bold">Carousel</h2>
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>UI Components</CardTitle>
                      <CardDescription>
                        Beautifully designed components that you can copy and
                        paste into your apps.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Built with Radix UI and Tailwind CSS. Accessible and
                        customizable.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button>Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="container grid items-center justify-center gap-6 py-8 md:py-10">
        <h2 className="text-2xl font-bold">Forms</h2>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="m@example.com" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Textarea</Label>
          <Textarea placeholder="Type your message here." />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Slider</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email">Select</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label>Datepicker</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </section>
      
      {/* Admin section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Admin Tools</h2>
          <BlogTokenGenerator />
        </div>
      </section>
      
      <footer className="flex w-full items-center justify-center border-t py-6">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by shadcn
        </p>
      </footer>
    </>
  );
};

export default Index;
