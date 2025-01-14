import React, {Fragment} from "react";

const FootRight = () => {
  let footer = [
    {
      id: 1,
      icon: "fa-phone",
      text1: "+012 345 678 102",
      text2: "+012 345 678 102",
    },
    {
      id: 2,
      icon: "fa-globe",
      text1: "mailto:support@devitems.com",
      text2: "https://devitems.com/",
    },
    {
      id: 3,
      icon: "fa-location-dot",
      text1: "Dev Items address goes here,",
      text2: "street,Crossroad123.",
    },
  ];
  return (
    <div className="flex flex-col justify-evenly p-3 w-1/2 overflow-hidden md:gap-5">
  {footer.map(({ id, text1, text2, icon }) => (
    <Fragment key={id}>
      <div className="flex gap-3 md:pl-10">
        <div className="bg-green-800  flex justify-center items-center rounded-t-2xl rounded-bl-2xl">
          <i className={`fa-solid ${icon} text-xs font-bold m-3 md:text-[18px]`}></i>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-[8px] md:text-xs">{text1}</p>
          <p className="text-[8px] md:text-xs">{text2}</p>
        </div>
      </div>
    </Fragment>
  ))}
</div>
  );
};

export default FootRight;
