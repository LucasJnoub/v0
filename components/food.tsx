'use client'

import { useState } from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { LocateIcon, MenuIcon, PhoneIcon } from "lucide-react"

type Category = 'combos' | 'breakfast' | 'starters' | 'mainCourses' | 'drinks' | 'desserts';

const config = {
  header: {
    title: "Acme Diner",
    address: "Rua Principal, 123, Cidade Qualquer, Brasil",
    phone: "(11) 5555-5555"
  },
  banner: {
    title: "Refeições Deliciosas Entregues",
    subtitle: "Explore nosso menu e peça seus pratos favoritos hoje mesmo.",
    imageUrl: "https://www.designi.com.br/images/preview/10066992.jpg",
    signUpButton: "Cadastre-se",
    loginButton: "Entrar"
  },
  categories: {
    combos: "Combos",
    breakfast: "Café da Manhã",
    starters: "Entradas",
    mainCourses: "Pratos Principais",
    drinks: "Bebidas",
    desserts: "Sobremesas"
  },
  cart: {
    title: "Carrinho",
    items: [
      { name: "Combo 1", price: "R$9,99" },
      { name: "Café da Manhã 2", price: "R$6,99" },
      { name: "Entrada 3", price: "R$4,99" }
    ],
    total: "Total",
    totalPrice: "R$21,97",
    checkoutButton: "Finalizar Compra"
  },
  footer: {
    text: "&copy; 2023 Acme Diner. Todos os direitos reservados."
  },
  meals: {
    combos: [
      { name: "Combo 1", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      // adicione mais combos conforme necessário
    ],
    breakfast: [
      { name: "Café da Manhã 1", price: "R$6,99", description: "Comece seu dia com um café da manhã saudável e saboroso.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      { name: "Café da Manhã 2", price: "R$6,99", description: "Comece seu dia com um café da manhã saudável e saboroso.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      // adicione mais cafés da manhã conforme necessário
    ],
    starters: [
      { name: "Entrada 1", price: "R$4,99", description: "Uma entrada saborosa para começar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      { name: "Entrada 2", price: "R$4,99", description: "Uma entrada saborosa para começar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      // adicione mais entradas conforme necessário
    ],
    mainCourses: [
      { name: "Prato Principal 1", price: "R$19,99", description: "Um prato principal delicioso e nutritivo.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      { name: "Prato Principal 2", price: "R$19,99", description: "Um prato principal delicioso e nutritivo.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      // adicione mais pratos principais conforme necessário
    ],
    drinks: [
      { name: "Bebida 1", price: "R$4,99", description: "Uma bebida refrescante para acompanhar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      { name: "Bebida 2", price: "R$4,99", description: "Uma bebida refrescante para acompanhar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      // adicione mais bebidas conforme necessário
    ],
    desserts: [
      { name: "Sobremesa 1", price: "R$6,99", description: "Uma sobremesa deliciosa para finalizar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      { name: "Sobremesa 2", price: "R$6,99", description: "Uma sobremesa deliciosa para finalizar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      // adicione mais sobremesas conforme necessário
    ]
  }
}

export default function Food() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('combos');

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <header className="bg-[#FF8C00] border-b px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2 text-white" prefetch={false}>
            <span className="text-lg font-bold">{config.header.title}</span>
          </Link>
          <div className="hidden md:flex items-center gap-2 text-white">
            <LocateIcon className="w-4 h-4" />
            <span>{config.header.address}</span>
            <PhoneIcon className="w-4 h-4" />
            <span>{config.header.phone}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="text-white border-white">
                <img src='../cart.png' className="w-6 h-6" />
                <span className="sr-only">Carrinho</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="space-y-6 p-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{config.cart.title}</h3>
                  <div className="space-y-2">
                    {config.cart.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{config.cart.total}</span>
                    <span className="font-bold text-lg">{config.cart.totalPrice}</span>
                  </div>
                  <Button className="w-full bg-[#FF8C00] text-white">{config.cart.checkoutButton}</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="bg-[#FFD700] py-12 md:py-16 lg:py-20">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4B0082]">{config.banner.title}</h1>
            <p className="text-[#4B0082] md:text-xl">{config.banner.subtitle}</p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button className="bg-[#32CD32] text-white">{config.banner.signUpButton}</Button>
              <Button variant="outline" className="border-[#32CD32] text-[#32CD32]">{config.banner.loginButton}</Button>
            </div>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/2">
            <img src={config.banner.imageUrl} alt="Banner Image" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <main className="container flex flex-col md:flex-row md:items-start md:gap-4 py-6 flex-1">
        <aside className="md:w-1/4 space-y-4">
          {Object.entries(config.categories).map(([key, value]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              className="w-full justify-center md:justify-start"
              onClick={() => setSelectedCategory(key as Category)}
            >
              {value}
            </Button>
          ))}
        </aside>
        <section className="md:w-3/4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {config.meals[selectedCategory].map((meal:any, index:any) => (
              <Card key={index}>
                <img src={meal.imageUrl} alt={meal.name} className="rounded-t-lg" />
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-bold">{meal.name}</h3>
                  <p>{meal.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{meal.price}</span>
                    <Button variant="outline" size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-[#FF8C00] text-white text-center py-4">
        {config.footer.text}
      </footer>
    </div>
  );
}
