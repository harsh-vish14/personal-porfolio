import React from "react";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";
import linkedin from "/linkedin.png";
import github from "/github.png";
import { useState } from "react";
import { toast } from "react-toastify";

function CONTACT_ME() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toastGenerator = (message) => {
    toast(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  function isEmail(emailAdress) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex)) return true;
    else return false;
  }

  const submitHandler = async () => {
    toastGenerator("❌ Getting Server Problem, Please use email Id");
    return;
    // validators
    if (!name) {
      toastGenerator("❌ Please provide name");
      return;
    }
    if (!email) {
      toastGenerator("❌ Please provide Email");
      return;
    }
    if (!isEmail(email)) {
      toastGenerator("❌ Please provide Valid Email");
      return;
    }
    if (!message) {
      toastGenerator("❌ Please provide Message, You cant send it blank");
      return;
    }

    const data = {
      name,
      email,
      message,
      createdAt: new Date(),
    };
    const res = await fetch(
      "https://sheet.best/api/sheets/151492d9-9e6f-4d45-ac72-5945203607ce",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    toastGenerator("✅ MESSAGE SEND SUCCESSFULLY 🎉🎉");
    setEmail("");
    setMessage("");
    setName("");
  };
  return (
    <>
      <div className=" bg-gradient-to-t from-transparent to-[#393C45] block sm:flex  gap-x-3 rounded-lg p-5 ">
        <div className="w-full sm:w-1/2">
          <div className="text-5xl font-bold text-pink">Let's Talk</div>
          <div className="text-xl">
            Wants to talk, just fill out the below form.
          </div>
          <div className="flex flex-col gap-5 pt-10">
            <div>
              <label htmlFor="name">Name</label>
              <Input
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="email">Message</label>
              <Textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Type your message here."
                id="message"
              />
            </div>
            <div className="w-full">
              <button
                class="rounded-md text-primary-dark font-semibold text-lg w-[200px] px-5 py-3 bg-pink hover:opacity-90  active:scale-95"
                className="cursor-not-allowed opacity-60 rounded-md text-primary-dark font-semibold text-lg w-[200px] px-5 py-3 bg-pink"
                // disabled={true}
                onClick={submitHandler}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 flex flex-col items-center sm:w-1/2 w-full">
          <img
            src="/me_thumbs_up.png"
            className="max-h-[200px] max-w-[200px]"
          />
          <div className="sm:text-3xl text-xl font-semibold">
            Thanks for visiting my Portfolio
          </div>
          <div className="mt-10 text-lg opacity-80">
            <div>🏠: Mumbai, India</div>
            <div>
              📧:{" "}
              <a
                href="mailto:harshkv9322@gmail.com"
                className="underline underline-offset-10"
              >
                harshkv9322@gmail.com
              </a>
              <div className="flex gap-3 mt-5 justify-center">
                <a
                  href="https://www.linkedin.com/in/harsh-vish14/"
                  target="_blank"
                >
                  <img src={linkedin} style={{ width: "35px" }} />
                </a>
                <a href="https://github.com/harsh-vish14" target="_blank">
                  <img src={github} style={{ width: "35px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CONTACT_ME;
