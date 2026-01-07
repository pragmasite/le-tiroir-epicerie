import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Operating hours
  const schedule = [
    { hours: t.hours.closed },      // Monday
    { hours: "08:30 - 11:30, 14:00 - 18:30" }, // Tuesday
    { hours: t.hours.closed },      // Wednesday
    { hours: "08:30 - 11:30, 14:00 - 18:30" }, // Thursday
    { hours: "08:30 - 11:30, 14:00 - 18:30" }, // Friday
    { hours: "08:30 - 11:30" },     // Saturday
    { hours: t.hours.closed },      // Sunday
  ];

  const todayIndex = new Date().getDay();

  return (
    <section id="horaires" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
          <h2 className="font-serif text-3xl md:text-5xl mt-2">{t.hours.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl rounded-2xl border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-primary">{t.hours.header}</span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  className={`px-6 py-4 flex justify-between items-center transition ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                    <span className={`${isToday ? "font-semibold text-primary" : ""}`}>
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span className={`text-right ${isClosed ? "text-muted-foreground" : ""}`}>
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
