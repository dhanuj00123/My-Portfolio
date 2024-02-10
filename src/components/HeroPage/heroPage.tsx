import { Button } from "@/components/ui/button";

const HeroPage = () => {
  return (
    <>
      <section className="mb-72">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
          <h1 className=" mt-44 scroll-m-20 text-2xl font-normal  lg:text-4xl">
            I design and build clean websites
          </h1>
          <div className="flex justify-center">
            <h4 className=" max-w-72 mt-3 scroll-m-20 text-xs font-normal text-muted-foreground lg:text-lg lg:max-w-md">
              Write anything here something about yourself to showcase what
              actually you doing or targeting etc.
            </h4>
          </div>
          <Button variant="garadient" size="lg" className="mt-3">
            <div className="text-base font-medium leading-none">Hire me</div>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
