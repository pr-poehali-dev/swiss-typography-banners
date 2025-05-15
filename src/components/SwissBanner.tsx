import React from "react";

interface SwissBannerProps {
  title: string;
  subtitle: string;
  principles: string[];
  phone1: string;
  phone2: string;
  website: string;
  squareMeters?: string;
  variant?: "standard" | "fullWidth" | "minimal";
  orientation?: "horizontal" | "vertical";
  customText?: string;
}

// QR код плейсхолдер, поскольку библиотека qrcode.react не установлена в проекте
const QRCodePlaceholder: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[120px] h-[120px] border-2 border-swiss-black bg-white flex flex-col items-center justify-center p-2">
        <div className="grid grid-cols-5 grid-rows-5 gap-1 w-full h-full">
          {/* Верхний левый угол */}
          <div className="col-span-2 row-span-2 bg-black"></div>
          {/* Верхний правый угол */}
          <div className="col-start-4 col-span-2 row-span-2 bg-black"></div>
          {/* Нижний левый угол */}
          <div className="col-span-2 row-start-4 row-span-2 bg-black"></div>
          {/* Центральный паттерн */}
          <div className="col-start-3 row-start-3 bg-black"></div>
          {/* Дополнительные битовые паттерны для создания иллюзии QR кода */}
          <div className="col-start-3 row-start-1 bg-black"></div>
          <div className="col-start-1 row-start-3 bg-black"></div>
          <div className="col-start-5 row-start-3 bg-black"></div>
          <div className="col-start-3 row-start-5 bg-black"></div>
          <div className="col-start-5 row-start-1 bg-black"></div>
          <div className="col-start-4 row-start-5 bg-black"></div>
        </div>
      </div>
      <div className="text-xs mt-1 text-center font-sourceSans">
        QR: {value.slice(0, 16)}
      </div>
    </div>
  );
};

const SwissBanner: React.FC<SwissBannerProps> = ({
  title,
  subtitle,
  principles,
  phone1,
  phone2,
  website,
  squareMeters,
  variant = "standard",
  orientation = "horizontal",
  customText,
}) => {
  // Настраиваем компоновку в зависимости от варианта
  const isFullWidth = variant === "fullWidth";
  const isMinimal = variant === "minimal";
  const isVertical = orientation === "vertical";

  if (isVertical) {
    return (
      <div className="relative bg-white border border-gray-900 overflow-hidden flex flex-col">
        {/* Верхний блок с логотипом */}
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <div className="font-montserrat text-lg uppercase tracking-wide">
            {subtitle}
          </div>

          <div className="logo-houzz">
            {/* Плейсхолдер для логотипа houzz */}
            <div className="h-8 w-24 bg-black text-white flex items-center justify-center">
              <span className="font-montserrat text-sm">Лого houzz</span>
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="font-montserrat text-4xl font-bold tracking-tight leading-tight mb-6">
              {title}
            </h1>

            {/* Площадь помещения, если указана */}
            {squareMeters && (
              <div className="font-montserrat text-xl mt-4 mb-4">
                {squareMeters}
              </div>
            )}

            {/* Дополнительный текст, если указан */}
            {customText && (
              <div className="font-sourceSans text-base mt-4 mb-4">
                {customText}
              </div>
            )}
          </div>

          {/* Принципы дизайна - вертикальная компоновка */}
          <div className="my-8">
            <ul className="flex flex-col gap-3">
              {principles.map((principle, index) => (
                <li
                  key={index}
                  className="font-sourceSans uppercase tracking-wide flex items-center"
                >
                  <span className="inline-block h-1 w-4 bg-black mr-3"></span>
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          {/* Нижний блок с контактами и QR-кодом */}
          <div className="mt-auto pt-8 flex justify-between items-end">
            <div>
              <p className="font-sourceSans">{phone1}</p>
              <p className="font-sourceSans">{phone2}</p>
              <p className="font-sourceSans mt-2">{website}</p>
            </div>

            <div>
              <QRCodePlaceholder value={`https://${website}`} />
            </div>
          </div>
        </div>

        {/* Декоративные элементы в швейцарском стиле */}
        <div className="absolute top-0 left-24 h-full w-[1px] bg-black opacity-10"></div>
        <div className="absolute top-1/3 left-0 h-[1px] w-full bg-black opacity-10"></div>
      </div>
    );
  }

  // Оригинальный горизонтальный вариант
  return (
    <div className="relative bg-white border border-gray-900 overflow-hidden">
      <div
        className={`grid ${isFullWidth ? "grid-cols-1" : "grid-cols-12"} gap-0 min-h-[400px]`}
      >
        {/* Левая колонка - Швейцарская сетка */}
        <div
          className={`
            ${isFullWidth ? "w-full" : "col-span-8"} 
            p-8 flex flex-col justify-between relative
          `}
        >
          <div className="flex flex-col gap-6">
            {/* Заголовок */}
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h1>

            {/* Подзаголовок */}
            <div className="pt-2">
              <p className="font-sourceSans text-lg tracking-wider uppercase">
                {subtitle}
              </p>
            </div>

            {/* Площадь помещения, если указана */}
            {squareMeters && (
              <div className="font-montserrat text-xl mt-2">{squareMeters}</div>
            )}

            {/* Дополнительный текст, если указан */}
            {customText && (
              <div className="font-sourceSans text-base mt-2">{customText}</div>
            )}

            {/* Принципы дизайна - горизонтальная компоновка в швейцарском стиле */}
            <div className="mt-4">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {principles.map((principle, index) => (
                  <li
                    key={index}
                    className="font-sourceSans uppercase tracking-wide"
                  >
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Контактная информация - выравнивание по низу в швейцарском стиле */}
          <div className="mt-auto pt-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-sourceSans">{phone1}</p>
                <p className="font-sourceSans">{phone2}</p>
              </div>
              <div className="text-right">
                <p className="font-sourceSans">{website}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Правая колонка - Логотип и QR-код */}
        <div
          className={`
            ${isFullWidth ? "absolute top-8 right-8" : isMinimal ? "col-span-4" : "col-span-4"} 
            p-8 flex flex-col justify-between items-end
          `}
        >
          <div className="logo-houzz mb-auto">
            {/* Плейсхолдер для логотипа houzz */}
            <div className="h-10 w-28 bg-black text-white flex items-center justify-center">
              <span className="font-montserrat text-sm">Лого houzz</span>
            </div>
          </div>

          <div className="mt-auto">
            <QRCodePlaceholder value={`https://${website}`} />
          </div>
        </div>
      </div>

      {/* Декоративный элемент в швейцарском стиле - вертикальная линия */}
      <div className="absolute top-0 left-24 h-full w-[1px] bg-black opacity-10"></div>

      {/* Декоративный элемент в швейцарском стиле - горизонтальная линия */}
      <div className="absolute bottom-24 left-0 h-[1px] w-full bg-black opacity-10"></div>
    </div>
  );
};

export default SwissBanner;
