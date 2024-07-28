'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { LocateIcon, PhoneIcon } from "lucide-react"

type Category = 'combos' | 'breakfast' | 'starters' | 'mainCourses' | 'drinks' | 'desserts';

type CartItem = {
  name: string;
  price: string;
  quantity: number;
};

export default function Food() {
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
      total: "Total",
      checkoutButton: "Finalizar Compra"
    },
    footer: {
      text: "&copy; 2023 Acme Diner. Todos os direitos reservados."
    },
    meals: {
      combos: [
        { name: "Combo 1", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      ],
      breakfast: [
        { name: "Café da Manhã 1", price: "R$6,99", description: "Comece seu dia com um café da manhã saudável e saboroso.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Café da Manhã 2", price: "R$6,99", description: "Comece seu dia com um café da manhã saudável e saboroso.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      ],
      starters: [
        { name: "Entrada 1", price: "R$4,99", description: "Uma entrada saborosa para começar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Entrada 2", price: "R$4,99", description: "Uma entrada saborosa para começar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      ],
      mainCourses: [
        { name: "Prato Principal 1", price: "R$19,99", description: "Um prato principal delicioso e nutritivo.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Prato Principal 2", price: "R$19,99", description: "Um prato principal delicioso e nutritivo.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      ],
      drinks: [
        { name: "Bebida 1", price: "R$4,99", description: "Uma bebida refrescante para acompanhar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Bebida 2", price: "R$4,99", description: "Uma bebida refrescante para acompanhar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      ],
      desserts: [
        { name: "Sobremesa 1", price: "R$6,99", description: "Uma sobremesa deliciosa para finalizar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Sobremesa 2", price: "R$6,99", description: "Uma sobremesa deliciosa para finalizar sua refeição.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
      ]
    }
  };

  const [selectedCategory, setSelectedCategory] = useState<Category>('combos');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (meal: { name: string; price: string }) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.name === meal.name);
      if (existingItem) {
        return currentCart.map(item =>
          item.name === meal.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...meal, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName: string) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.name === itemName);
      if (existingItem && existingItem.quantity > 1) {
        return currentCart.map(item =>
          item.name === itemName ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return currentCart.filter(item => item.name !== itemName);
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R$', '').replace(',', '.'));
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

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
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{item.name} (x{item.quantity})</span>
                        <div>
                          <span className="font-bold mr-2">
                            R${(parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity).toFixed(2)}
                          </span>
                          <Button onClick={() => removeFromCart(item.name)} variant="outline" size="sm">-</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{config.cart.total}</span>
                    <span className="font-bold text-lg">R${calculateTotal()}</span>
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
      <main className="container py-6 flex-1">
  <div className="flex flex-col md:flex-row gap-6">
    <div className="md:w-1/4">
      <div className="md:sticky md:top-6 overflow-x-auto md:overflow-x-visible pb-4 mb-4 md:pb-0 md:mb-0">
        <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
          {Object.entries(config.categories).map(([key, value]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              className="flex-shrink-0 md:w-full justify-center md:justify-start"
              onClick={() => setSelectedCategory(key as Category)}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>
    </div>
    <section className="md:w-3/4 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {config.meals[selectedCategory].map((meal:any, index:any) => (
          <Card key={index}>
            <img src={meal.imageUrl} alt={meal.name} className="rounded-t-lg" />
            <CardContent className="space-y-2">
              <h3 className="text-lg font-bold">{meal.name}</h3>
              <p>{meal.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{meal.price}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => addToCart({ name: meal.name, price: meal.price })}
                >
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
</main>
      <footer className="bg-[#FF8C00] text-white text-center py-4">
        {config.footer.text}
      </footer>
    </div>
  );
}