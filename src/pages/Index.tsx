import React from "react";
import SwissBanner from "@/components/SwissBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="font-montserrat text-4xl font-bold mb-4">
            Рекламные баннеры
          </h1>
          <p className="font-sourceSans text-xl text-gray-600">
            Швейцарский типографический стиль для дизайна интерьеров
          </p>
        </header>

        <div className="flex justify-center mb-8">
          <div
            className="inline-flex bg-white rounded-md shadow-sm"
            role="group"
          >
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded-l-lg"
            >
              Горизонтальные
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-white text-gray-800 rounded-r-lg border-t border-b border-r border-gray-200"
            >
              Вертикальные
            </button>
          </div>
        </div>

        {/* Вертикальные баннеры в 2 колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Баннер 1 - Вертикальный */}
          <div className="bg-white shadow-lg h-[700px]">
            <SwissBanner
              title="НОВЫЙ ВЗГЛЯД НА ДИЗАЙН ДОМА"
              subtitle="Проект «BUSHEMY»"
              squareMeters="80-250м²"
              principles={["Свет", "Пространство", "Чистота"]}
              phone1="8 900 232 45 54"
              phone2="8 900 232 45 56"
              website="houzz.interieroom.ru"
              variant="standard"
              orientation="vertical"
            />
          </div>

          {/* Баннер 2 - Вертикальный */}
          <div className="bg-white shadow-lg h-[700px]">
            <SwissBanner
              title="ИНТЕРЬЕР В СКАНДИНАВСКОМ СТИЛЕ"
              subtitle="Проект «BUSHEMY»"
              customText="Разработаем дизайн под Вашу площадь"
              principles={["Комфорт", "Эстетика", "Простота"]}
              phone1="8 900 232 45 54"
              phone2="8 900 232 45 56"
              website="houzz.interieroom.ru"
              variant="standard"
              orientation="vertical"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Баннер 3 - Вертикальный */}
          <div className="bg-white shadow-lg h-[700px]">
            <SwissBanner
              title="ИНТУИТИВНЫЙ ИНТЕРЬЕР – ДОМ, В КОТОРОМ ХОЧЕТСЯ ЖИТЬ"
              subtitle="Проект «BUSHEMY»"
              customText="Принципы скандинавского дизайна:"
              principles={[
                "Минимализм",
                "Экологичность",
                "Комфорт",
                "Эстетика",
                "Простота",
                "Свет",
                "Пространство",
              ]}
              phone1="8 900 232 45 54"
              phone2="8 900 232 45 56"
              website="houzz.interieroom.ru"
              variant="standard"
              orientation="vertical"
            />
          </div>

          {/* Баннер 4 - Вертикальный */}
          <div className="bg-white shadow-lg h-[700px]">
            <SwissBanner
              title="СКАНДИНАВСКАЯ ЖИЗНЬ"
              subtitle="Проект «BUSHEMY»"
              customText="ДИЗАЙН С ЛЮБОВЬЮ К ДЕТАЛЯМ"
              principles={["Минимализм", "Экологичность"]}
              phone1="8 900 232 45 54"
              phone2="8 900 232 45 56"
              website="houzz.interieroom.ru"
              variant="standard"
              orientation="vertical"
            />
          </div>
        </div>

        <h2 className="font-montserrat text-3xl font-bold mt-16 mb-8 text-center">
          Горизонтальные баннеры
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {/* Баннер 1 */}
          <div className="bg-white shadow-lg">
            <SwissBanner
              title="НОВЫЙ ВЗГЛЯД НА ДИЗАЙН ДОМА"
              subtitle="Проект «BUSHEMY»"
              squareMeters="80-250м²"
              principles={["Свет", "Пространство", "Чистота"]}
              phone1="8 900 232 45 54"
              phone2="8 900 232 45 56"
              website="houzz.interieroom.ru"
              variant="standard"
            />
          </div>

          {/* Баннер 2 */}
          <div className="bg-white shadow-lg">
            <SwissBanner
              title="ИНТЕРЬЕР В СКАНДИНАВСКОМ СТИЛЕ"
              subtitle="Проект «BUSHEMY»"
              customText="Разработаем дизайн под Вашу площадь"
              principles={["Комфорт", "Эстетика", "Простота"]}
              phone1="8 900 232 45 54"
              phone2="8 900 232 45 56"
              website="houzz.interieroom.ru"
              variant="standard"
            />
          </div>

          {/* Баннер 3 */}
          <div className="bg-white shadow-lg">
            <SwissBanner
              title="ИНТУИТИВНЫЙ ИНТЕРЬЕР – ДОМ, В КОТОРОМ ХОЧЕТСЯ ЖИТЬ"
              subtitle="Проект «BUSHEMY»"
              customText="Принципы скандинавского дизайна:"
              principles={[
                "Минимализм",
                "Экологичность",
                "Комфорт",
                "Эстетика",
                "Простота",
                "Свет",
                "Пространство",
              ]}
              phone1="8 900 232 45 54"
              phone2="8 900 232 45 56"
              website="houzz.interieroom.ru"
              variant="fullWidth"
            />
          </div>

          {/* Баннер 4 */}
          <div className="bg-white shadow-lg">
            <SwissBanner
              title="СКАНДИНАВСКАЯ ЖИЗНЬ"
              subtitle="Проект «BUSHEMY»"
              customText="ДИЗАЙН С ЛЮБОВЬЮ К ДЕТАЛЯМ"
              principles={["Минимализм", "Экологичность"]}
              phone1="8 900 232 45 54"
              phone2="8 900 232 45 56"
              website="houzz.interieroom.ru"
              variant="minimal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
