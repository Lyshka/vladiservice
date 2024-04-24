import axios from "axios";
import toastr from "toastr";

import { Response } from "../types/response";
import { openThanksModal } from "./modal";

const handleForm = () => {
  const formALL = document.querySelectorAll<HTMLFormElement>("form");
  const { openModal } = openThanksModal();

  formALL.forEach((form) => {
    form.onsubmit = async (event) => {
      event.preventDefault();

      const telValue = (
        (event.target as HTMLFormElement).elements.namedItem(
          "tel"
        ) as HTMLInputElement
      ).value;

      const messageValue = (
        (event.target as HTMLFormElement).elements.namedItem(
          "message"
        ) as HTMLInputElement
      ).value;

      const confValue = (
        (event.target as HTMLFormElement).elements.namedItem(
          "conf"
        ) as HTMLInputElement
      ).checked;

      if (telValue.length < 12) {
        toastr.error("Не правильный формат телефона!");
        return;
      }

      if (!confValue) {
        toastr.error(
          "Выдолжны согласиться с Политикой обработки персональных данных!"
        );
        return;
      }

      try {
        const {
          data: { error, success },
        } = await axios.post<Response>(`${window.location.origin}/form.php`, {
          tel: telValue,
          message: messageValue,
        });

        if (success) {
          (event.target as HTMLFormElement).reset();
          openModal();
        } else {
          toastr.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    };
  });
};

handleForm();
