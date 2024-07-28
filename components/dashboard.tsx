  /**
   * v0 by Vercel.
   * @see https://v0.dev/t/2QV9jTNrUOL
   * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
   * 
   * 
   */

  "use client"
  import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
  import { Button } from "@/components/ui/button"
  import Link from "next/link"
  import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"
  import { Input } from "@/components/ui/input"
  import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
  import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
  import { Progress } from "@/components/ui/progress"
  import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  import { useEffect, useState } from "react"
  import DashboardComponent from './dashboard-content'
  import Food from "./food"
import { render } from "react-dom"

  export default function Dashboard() {

    const [currentComponent, setCurrentComponent] = useState('dashboard');

   
    const renderComponent = () => {
      switch(currentComponent) {
        case 'dashboard':
          return <DashboardComponent></DashboardComponent>;
        case 'customers':
          // console.log("error");
          
          return <Food></Food>
        case 'leads':
            return ''
            // ... outros casos
        default:
            return ''
      }}
      

      // useEffect(()=>{
        
      //   renderComponent();  
          
      // }, [currentComponent])
    
    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="lg:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-foreground hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                  onClick={() => setCurrentComponent('dashboard')}
                >
                  <HomeIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                  onClick={() => setCurrentComponent('customers')}
                  >
                  <UsersIcon className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                  onClick={() => setCurrentComponent('leads')}

                >
                  <BriefcaseIcon className="h-5 w-5" />
                  Leads
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                  onClick={() => setCurrentComponent('sales')}

                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  Sales
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <LineChartIcon className="h-5 w-5" />
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="hidden lg:block border-r bg-muted/40">
            <div className="flex flex-col gap-2">
              <div className="flex h-[60px] items-center px-6">
                <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                  <Package2Icon className="h-6 w-6" />
                  <span className="">Acme Inc</span>
                </Link>
              </div>
              <div className="flex-1">
  <nav className="grid items-start px-4 text-sm font-medium">
    <Link
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentComponent === 'dashboard' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        setCurrentComponent('dashboard');
      }}
    >
      <HomeIcon className="h-4 w-4" />
      Dashboard
    </Link>
    <Link
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentComponent === 'customers' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        setCurrentComponent('customers');
      }}
    >
      <UsersIcon className="h-4 w-4" />
      Customers
    </Link>
    <Link
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentComponent === 'leads' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        setCurrentComponent('leads');
      }}
    >
      <BriefcaseIcon className="h-4 w-4" />
      Leads
    </Link>
    <Link
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentComponent === 'sales' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        setCurrentComponent('sales');
      }}
    >
      <ShoppingCartIcon className="h-4 w-4" />
      Sales
    </Link>
    <Link
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentComponent === 'analytics' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        setCurrentComponent('analytics');
      }}
    >
      <LineChartIcon className="h-4 w-4" />
      Analytics
    </Link>
    <Link
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentComponent === 'settings' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        setCurrentComponent('settings');
      }}
    >
      <SettingsIcon className="h-4 w-4" />
      Settings
    </Link>
  </nav>
</div>

            </div>
          </div>
            <main>
                {renderComponent()}
            </main>
        </div>
      </div>
    )
  }

  function BriefcaseIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }


  function FilterIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    )
  }


  function HomeIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }


  function ImportIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12" />
        <path d="m8 11 4 4 4-4" />
        <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
      </svg>
    )
  }


  function LineChartIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  }


  function MenuIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }


  function Package2Icon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }


  function PlusIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }


  function SearchIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }


  function SettingsIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }


  function ShoppingCartIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }


  function UsersIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }


  function XIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }