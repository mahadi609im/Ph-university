const User = ({ user, data, setData }) => {
  const { requestedBy, subject, description, userImg, priority, status } = user;

  const handleData = () => {
    const clickedData = data.find(el => el.ticketId === user.ticketId);
    if (clickedData.status === 'Pending') {
      clickedData.status = 'Submitted';
    } else if (clickedData.status === 'Submitted') {
      clickedData.status = 'Reviewed';
    }

    const filteredData = data.filter(el => el.ticketId !== user.ticketId);
    setData([clickedData, ...filteredData]);
  };

  return (
    <div
      onClick={handleData}
      className="shadow-2xl border-2 border-gray-800 p-6 rounded-lg cursor-pointer"
    >
      <div className="bg-slate-700 w-[80px] h-[80px] rounded-full">
        <img
          className="object-cover w-full h-full rounded-full"
          src={userImg}
          alt=""
        />
      </div>
      <div className="space-y-3">
        <h3 className="font-semibold text-lg mt-2">{requestedBy}</h3>
        <h2 className="text-3xl font-bold">{subject}</h2>
        <p className="text-base font-normal">{description}</p>
        <div className="flex gap-3 mt-6 justify-end">
          <p
            className={`text-sm py-2 px-4 rounded-full ${
              priority === 'High'
                ? 'bg-green-100 text-green-500'
                : priority === 'Medium'
                ? 'bg-amber-100 text-amber-500'
                : 'text-red-500 bg-red-100'
            } font-semibold`}
          >
            {priority}
          </p>
          <p
            className={`text-sm py-2 px-4 rounded-full font-medium ${
              status === 'Pending'
                ? 'bg-red-200 text-red-700'
                : status === 'Submitted'
                ? 'bg-purple-200 text-purple-500'
                : 'bg-amber-200 text-amber-700'
            }`}
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
