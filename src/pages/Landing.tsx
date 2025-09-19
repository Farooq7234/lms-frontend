import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, BarChart3, Shield, Zap, CheckCircle, Database } from "lucide-react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Database className="h-8 w-8" />
            <span className="text-xl font-bold">LeadFlow</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-black transition-colors">
              Benefits
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </a>
          </nav>
          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white bg-transparent">
           <Link to={'/signin'}>Login</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-gray-300">
              Lead Management System
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Manage Your Leads Like a{" "}
              <span className="relative">
                Pro
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black animate-expand-width"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-pretty max-w-2xl mx-auto">
              Streamline your lead management process with our comprehensive system. Track, organize, and convert leads
              with powerful CRUD operations, advanced filtering, and real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage leads effectively and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Users className="h-10 w-10 mb-4" />
                <CardTitle>Complete CRUD Operations</CardTitle>
                <CardDescription>
                  Create, read, update, and delete leads with full data management capabilities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <BarChart3 className="h-10 w-10 mb-4" />
                <CardTitle>Advanced Filtering</CardTitle>
                <CardDescription>
                  Server-side filtering with multiple operators for precise lead segmentation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Shield className="h-10 w-10 mb-4" />
                <CardTitle>Secure Authentication</CardTitle>
                <CardDescription>JWT-based authentication with httpOnly cookies for maximum security</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Zap className="h-10 w-10 mb-4" />
                <CardTitle>Real-time Updates</CardTitle>
                <CardDescription>Instant UI updates when creating, editing, or deleting leads</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Database className="h-10 w-10 mb-4" />
                <CardTitle>Smart Pagination</CardTitle>
                <CardDescription>Server-side pagination for optimal performance with large datasets</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CheckCircle className="h-10 w-10 mb-4" />
                <CardTitle>Lead Scoring</CardTitle>
                <CardDescription>Track lead quality with scoring system and qualification status</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Lead Management System?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Lead Tracking</h3>
                    <p className="text-gray-600">
                      Track all essential lead information including contact details, company info, source attribution,
                      and activity history.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Advanced Status Management</h3>
                    <p className="text-gray-600">
                      Organize leads by status (new, contacted, qualified, lost, won) and track their journey through
                      your sales funnel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Powerful Search & Filter</h3>
                    <p className="text-gray-600">
                      Find leads quickly with advanced filtering options including date ranges, score ranges, and
                      multi-criteria searches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Lead Data Structure</h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name & Contact:</span>
                  <span>first_name, last_name, email, phone</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Company Info:</span>
                  <span>company, city, state</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lead Source:</span>
                  <span>website, ads, referral, events</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span>new, contacted, qualified, lost, won</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Metrics:</span>
                  <span>score (0-100), lead_value</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tracking:</span>
                  <span>last_activity_at, is_qualified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Lead Management?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our system to streamline their lead management process and boost
            conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4">
        <div className="container mx-auto text-center text-gray-600">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Database className="h-6 w-6" />
            <span className="font-semibold">LeadFlow</span>
          </div>
          <p>&copy; 2025 LeadFlow. Built for the Erino SDE Internship Assignment.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
