import {
    HomeIcon,
    ListOrderedIcon,
    LogInIcon,
    MenuIcon,
    PercentIcon,
    ShoppingCartIcon,
  } from 'lucide-react';
  import { Button } from './ui/button';
  import { Card } from './ui/card';
  import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
  
  const Header = () => {
    return (
      <Card className="flex items-center justify-between p-[1.2rem] border-none">
        <Sheet >
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
  
          <SheetContent side="left" className='bg-white'>
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>
  
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <LogInIcon size={16} />
                Fazer Login
              </Button>
  
              <Button variant="outline" className="w-full justify-start gap-2">
                <HomeIcon size={16} />
                Início
              </Button>
  
              <Button variant="outline" className="w-full justify-start gap-2">
                <PercentIcon size={16} />
                Ofertas
              </Button>
  
              <Button variant="outline" className="w-full justify-start gap-2">
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <h1> MR Pizzas 🍕</h1>
        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    );
  };
  
  export default Header;
  