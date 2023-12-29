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

  return (
    <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
      <div className="h-20 bg-slate-500 flex items-center justify-center flex-col gap-2 p-2">
        <label>Пожалуйсте укажите ваш город</label>
        <select onChange={(e) => handleCityChange(e.target.value)} >
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
        </select>
      </div>
    </Modal>
  );
};

export default CityModal;
