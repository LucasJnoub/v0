  'use client'

  import { useState } from "react"
  import Link from "next/link"
  import { Button } from "@/components/ui/button"
  import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"
  import { Card, CardContent } from "@/components/ui/card"
  import { LocateIcon, PhoneIcon, Trash } from "lucide-react"
  import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
  } from "@/components/ui/dialog"
  import { Checkbox } from "./ui/checkbox"

  type Category = 'combos' | 'breakfast' | 'starters' | 'mainCourses' | 'drinks' | 'desserts';

  type CartItem = {
    name: string;
    price: string;
    quantity: number;
    extras: string[];
  };

  type Extra = {
    name: string;
    price: string;
  };

  const extrasList: Extra[] = [
    { name: "Ketchup", price: "R$0,50" },
    { name: "Mayonnaise", price: "R$0,50" },
    // Add more extras as needed
  ];

  const config = {
    header: {
      title: "Delivefy",
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
      text: "© 2024 Delivefy. Todos os direitos reservados."
    },
    meals: {
      combos: [
        { name: "Combo 1", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
        { name: "Combo 2", price: "R$9,99", description: "Um combo delicioso com sua escolha de prato principal, acompanhamento e bebida.", imageUrl: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/GaleriaImagem/130275/fotos-para-hamburguerias_fotografia-de-hamburguer-4.JPG" },
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


  export default function Food() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('combos');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState<{ name: string; price: string } | null>(null);
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    const openDialog = (meal: { name: string; price: string }) => {
      setSelectedMeal(meal);
      setIsDialogOpen(true);
    };

    const closeDialog = () => {
      setSelectedMeal(null);
      setSelectedExtras([]);
      setIsDialogOpen(false);
    };

    const toggleExtra = (extra: string) => {
      setSelectedExtras(prev =>
        prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
      );
    };

    const addToCart = () => {
      if (selectedMeal) {
        const mealExtras = selectedExtras.map(extraName => {
          const extra = extrasList.find(e => e.name === extraName);
          return extra ? `${extra.name} (+${extra.price})` : extraName;
        });

        const mealExtrasPrice = selectedExtras.reduce((total, extraName) => {
          const extra = extrasList.find(e => e.name === extraName);
          return total + (extra ? parseFloat(extra.price.replace("R$", "").replace(",", ".")) : 0);
        }, 0);

        const totalPrice = parseFloat(selectedMeal.price.replace("R$", "").replace(",", ".")) + mealExtrasPrice;

        setCart(prevCart => [
          ...prevCart,
          { name: selectedMeal.name, price: `R$${totalPrice.toFixed(2)}`, quantity: 1, extras: mealExtras }
        ]);
        closeDialog();
      }
    };

    const removeFromCart = (index: number) => {
      setCart(prevCart => prevCart.filter((_, i) => i !== index));
    };

    const calculateTotal = () => {
      return cart.reduce((total, item) => {
        return total + parseFloat(item.price.replace("R$", "").replace(",", "."));
      }, 0);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#FF8C00] border-none px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
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
    <div className="flex items-center gap-2">
      {cart.length > 0 && <div className="text-red-500 bg-white rounded-full w-6 text-center">{cart.length}</div>}
      
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
          <div key={index} className="flex flex-col">
            <span>{item.name} ({item.price})</span>
            {item.extras && item.extras.length > 0 && (
              <div className="ml-4 text-sm">
                {item.extras.map((extra, extraIndex) => (
                  <div key={extraIndex} className="flex items-start justify-between">
                    <div>{extra}</div>
                  </div>
                ))}
              </div>
            )}
                    <div>
                      <span className="font-bold mr-2">
                        {item.price}
                      </span>
                      <Button onClick={() => removeFromCart(index)} variant="ghost" className="text-red-500" size="sm">{<Trash className="w-4 h-4"></Trash>}</Button>
                    <Separator></Separator>
                    </div>
                  </div>
                ))}
              </div>


                
              {/* <Separator /> */}
              <div className="flex items-center justify-between">
                <span className="font-bold">{config.cart.total}</span>
                <span className="font-bold text-lg">R${calculateTotal().toFixed(2)}</span>
              </div>
              <Button className="w-full bg-[#FF8C00] text-white">{config.cart.checkoutButton}</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </header>
        <div className="bg-[#FFD700] py-12 md:py-16 lg:py-20 pt-24 md:pt-32">
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
                          onClick={() => openDialog(meal)}
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

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-white rounded-lg p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Selecione Ingredientes Extras</DialogTitle>
              <DialogDescription>Escolha os ingredientes extras para adicionar à sua refeição.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {extrasList.map(extra => (
                <div key={extra.name} className="flex items-center space-x-2">
                  <Checkbox
                    id={extra.name}
                    checked={selectedExtras.includes(extra.name)}
                    onCheckedChange={() => toggleExtra(extra.name)}
                  />
                  <label htmlFor={extra.name} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {extra.name} (+{extra.price})
                  </label>
                </div>
              ))}
            </div>
            <DialogFooter className="mt-6">
              <Button onClick={addToCart} className="bg-[#FF8C00] text-white">Adicionar ao Carrinho</Button>
              <Button variant="outline" onClick={closeDialog}>Cancelar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }