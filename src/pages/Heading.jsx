const Heading = () => {
  return (
    <div>
      <header className="flex h-[104px] justify-evenly py-[24px] px-[27px]">
        <div>
          <img src="/public/assets/hamburger.png" alt="" />
        </div>
        <div className="mx-[45px]">
          <img src="/public/assets/brandName.png" alt="" />
        </div>

        <div className="flex gap-[8px]">
          <div>
            <img src="/public/assets/searchIicon.png" alt="" />
          </div>
          <div>
            <img src="/public/assets/product.png" alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Heading;
