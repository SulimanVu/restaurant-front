import { setCity } from "@/redux/features/citySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Modal } from "@/shared/Modal/Modal";
import { useEffect, useState } from "react";

const CityModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.citySlice.city);

  useEffect(() => {
    if (!city) {
      setIsModalVisible(true);
    }
  }, [city]);

  const handleCityChange = (selectedCity: string) => {
    dispatch(setCity(selectedCity));
    setIsModalVisible(false); // Close the modal after selecting the city
  };
  const handleClose = () => {
    if (!city) return;
    setIsModalVisible(false);
  };
  return (
    <Modal isOpen={isModalVisible} onClose={handleClose}>
      <div className="h-20 w-96 flex items-center justify-center flex-col gap-2 p-2">
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Пожалуйсте укажите ваш город
        </label>
        <select
          className="p-2 w-full"
          id="city"
          onChange={(e) => handleCityChange(e.target.value)}
        >
          <option defaultValue={"Москва"}>Выберите город</option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
        </select>
      </div>
    </Modal>
  );
};

export default CityModal;
