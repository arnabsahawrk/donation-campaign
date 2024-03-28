import toast from "react-hot-toast";

//Get Storage
export const getStorage = () => {
  return JSON.parse(window.localStorage.getItem("donation")) || [];
};

//Set Storage
export const setStorage = (data) => {
  const storedData = getStorage();
  if (storedData.find((store) => store.id === data.id))
    return toast.error("Already Did.", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  storedData.push(data);
  window.localStorage.setItem("donation", JSON.stringify(storedData));
  toast.success("Donate With A Lavish Hand.", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
};
