const UserReview = ({ text }: { text: string }) => {
  const [name, ...rest] = text.split(':');
  const review = rest.join(':').trim();

  return (
    <div className="bg-white rounded-md px-4 py-2 text-[14px]">
      <span className="font-semibold">{name}:</span>{" "}
      <span className="font-normal">{review}</span>
    </div>
  );
};

export default UserReview;
