import React from "react";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";

function CONTACT_ME() {
  return (
    <div className=" bg-gradient-to-t from-transparent to-[#393C45] block sm:flex  gap-x-3 rounded-lg p-5 ">
      <div className="w-full sm:w-1/2">
        <div className="text-5xl font-bold text-pink">Let's Talk</div>
        <div className="text-xl">
          Wants to talk, just fill out the below form.
        </div>
        <div className="flex flex-col gap-5 pt-10">
          <div>
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="email">Message</label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
          <div className="w-full">
            <button class="rounded-md text-primary-dark font-semibold text-lg w-[200px] px-5 py-3 bg-pink hover:opacity-90  active:scale-90">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-0 flex flex-col items-center sm:w-1/2 w-full">
        <img src="/me_thumbs_up.png" className="max-h-[200px] max-w-[200px]" />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CONTACT_ME;
