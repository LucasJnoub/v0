/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cgjXzldAJSN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Food() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <header
        className="bg-[#FD0808] bg-cover bg-center h-48"
        style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}
      >
        <div className="flex items-center justify-between h-full px-4 bg-opacity-50 bg-[#333333]">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>DN</AvatarFallback>
            </Avatar>
            <div className="ml-4 text-white">
              <h1 className="text-xl font-bold">demonstracao</h1>
              <Badge variant="default" className="bg-[#4CAF50] text-white">
                ABERTO
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingCartIcon className="w-6 h-6 text-white" />
            <span className="text-white">CARRINHO VAZIO</span>
          </div>
        </div>
      </header>
      <nav className="flex justify-center p-4 bg-white shadow">
        <Link href="#" className="px-4 py-2 text-lg font-semibold text-[#007BFF]" prefetch={false}>
          INICIAL
        </Link>
        <Link href="#" className="px-4 py-2 text-lg font-semibold text-[#6C757D]" prefetch={false}>
          CARRINHO VAZIO
        </Link>
      </nav>
      <div className="flex flex-1">
        <aside className="w-64 p-4 bg-white shadow">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <SandwichIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Hambúrguer</span>
            </div>
            <div className="flex items-center space-x-2">
              <CupSodaIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Refrigerante</span>
            </div>
            <div className="flex items-center space-x-2">
              <PizzaIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Pizzas</span>
            </div>
            <div className="flex items-center space-x-2">
              <DogIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Hot Dogs</span>
            </div>
            <div className="flex items-center space-x-2">
              <FishIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Batata</span>
            </div>
            <div className="flex items-center space-x-2">
              <PopcornIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Petiscos</span>
            </div>
            <div className="flex items-center space-x-2">
              <TriangleIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Trios</span>
            </div>
            <div className="flex items-center space-x-2">
              <CombineIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Combos</span>
            </div>
            <div className="flex items-center space-x-2">
              <CitrusIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Açaí</span>
            </div>
            <div className="flex items-center space-x-2">
              <CookingPotIcon className="w-6 h-6 text-[#007BFF]" />
              <span className="text-[#333333]">Cozinha</span>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4">
          <div className="mb-4">
            <img src="/placeholder.svg" alt="Main" className="w-full h-64 object-cover rounded-md" />
          </div>
          <div className="space-y-4">
            <Card className="bg-white border border-[#DEE2E6] shadow-md">
              <CardHeader>
                <CardTitle className="text-[#333333]">HAMBÚRGUER</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">X-Tudo</h2>
                      <p className="text-sm text-[#6C757D]">R$ 5,00</p>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    INCLUIR
                  </Button>
                </div>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 mt-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">X-Bacon</h2>
                      <p className="text-sm text-[#6C757D]">R$ 8,00</p>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    INCLUIR
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border border-[#DEE2E6] shadow-md">
              <CardHeader>
                <CardTitle className="text-[#333333]">REFRIGERANTE</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Sprite 2 Litros</h2>
                      <p className="text-sm text-[#6C757D]">R$ 8,00</p>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    INCLUIR
                  </Button>
                </div>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 mt-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Coca Cola 2 Litros</h2>
                      <p className="text-sm text-[#6C757D]">R$ 8,00</p>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    INCLUIR
                  </Button>
                </div>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 mt-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Coca Cola Lata 300ML</h2>
                      <p className="text-sm text-[#6C757D]">R$ 5,00</p>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    INCLUIR
                  </Button>
                </div>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 mt-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Sprite Lata 300ML</h2>
                      <p className="text-sm text-[#6C757D]">R$ 5,00</p>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    INCLUIR
                  </Button>
                </div>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 mt-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Fanta 2 Litros</h2>
                      <p className="text-sm text-[#6C757D]">R$ 8,00</p>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    INCLUIR
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border border-[#DEE2E6] shadow-md">
              <CardHeader>
                <CardTitle className="text-[#333333]">PIZZAS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Da Casa</h2>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    Opções
                  </Button>
                </div>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 mt-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Calabresa</h2>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    Opções
                  </Button>
                </div>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 mt-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Frango com Catupiry</h2>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    Opções
                  </Button>
                </div>
                <div className="flex items-center justify-between w-full border border-[#DEE2E6] rounded-md p-4 mt-4 hover:bg-[#E9ECEF]">
                  <Link href="#" className="flex items-center space-x-4 w-full" prefetch={false}>
                    <img src="/placeholder.svg" alt="Item" className="w-24 h-24 rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold text-[#333333]">Churrasco</h2>
                      <p className="text-sm text-[#6C757D]">R$ 28,00</p>
                    </div>
                  </Link>
                  <Button variant="default" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
                    INCLUIR
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border border-[#DEE2E6] shadow-md">
              <CardHeader>
                <CardTitle className="text-[#333333]">PIZZA MEIO A</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function CitrusIcon(props:any) {
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
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
      <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
      <path d="m14 10-5.5 5.5" />
      <path d="M14 17.85V10H6.15" />
    </svg>
  )
}


function CombineIcon(props:any) {
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
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function CookingPotIcon(props:any) {
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
      <path d="M2 12h20" />
      <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="m4 8 16-4" />
      <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </svg>
  )
}


function CupSodaIcon(props:any) {
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
      <path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
      <path d="M5 8h14" />
      <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
      <path d="m12 8 1-6h2" />
    </svg>
  )
}


function DogIcon(props:any) {
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
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  )
}


function FishIcon(props:any) {
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
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  )
}


function PizzaIcon(props:any) {
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
      <path d="M15 11h.01" />
      <path d="M11 15h.01" />
      <path d="M16 16h.01" />
      <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
      <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
    </svg>
  )
}


function PopcornIcon(props:any) {
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
      <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
      <path d="M10 22 9 8" />
      <path d="m14 22 1-14" />
      <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
    </svg>
  )
}


function SandwichIcon(props:any) {
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
      <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
      <path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" />
      <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
      <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
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


function TriangleIcon(props:any) {
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
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
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