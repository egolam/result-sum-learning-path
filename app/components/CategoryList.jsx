import Image from "next/image";

const CategoryList = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

CategoryList.Item = function CategoryItem({ children, className, style }) {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

CategoryList.Item.Title = function CategoryItemTitle({
  children,
  className,
  style,
}) {
  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
};

CategoryList.Item.Score = function CategoryItemScore({ children }) {
  return <p>{children}</p>;
};

CategoryList.Item.Icon = function CategoryItemIcon({
  src,
  width,
  height,
  alt,
}) {
  return <Image src={src} width={width} height={height} alt={alt} />;
};

export default CategoryList;
