import "./App.css";
import { ThemeProvider, ModeToggle } from "./components";
import { ProductCard } from "./components/apollo-ui";

const dummyProducts = [
  {
    id: "1",
    title: "Apollo Trading Platform",
    description:
      "Apollo is a cutting-edge trading platform designed to help traders make informed decisions with minimal effort.",
    imageAlt: "A desktop monitor displaying Apollo's trading platform",
    imageSrc:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Trading", "Portfolio", "Popular"],
  },
];

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="grid grid-cols-2 gap-4">
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageAlt={product.imageAlt}
            imageSrc={product.imageSrc}
            tags={product.tags}
          />
        ))}
      </section>
      {/* <div className="flex gap-2">
        <Button>Click me!</Button>
        <Button variant="destructive" size="icon">
          <HomeIcon className="h-4 w-4" />
        </Button>
        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <ModeToggle />
      </div> */}
    </ThemeProvider>
  );
}

export default App;
