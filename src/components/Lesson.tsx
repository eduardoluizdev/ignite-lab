import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, type, avaliableAt }: LessonProps) {
  const { slug: slugParam } = useParams<{ slug: string }>();

  const isLessonAvaliable = isPast(avaliableAt);
  const avaliableDateFormat = format(
    avaliableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const isActiveLesson = slugParam === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{avaliableDateFormat}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 relative",
          {
            "bg-green-500  before:content-[' '] before:absolute before:w-4 before:h-4 before:bg-green-500 before:z-[100] before:rotate-45 before:left-0 before:top-[50%] before:translate-y-[-10px] before:translate-x-[-50%]":
              isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span
              className={classNames(
                "text-sm text-blue-500 font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              "text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold",
              {
                "border-white": isActiveLesson,
              }
            )}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames("text-white mt-5 block ", {
            "text-gray-200": !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
