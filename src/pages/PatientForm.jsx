import { useState } from "react";
import {
  Droplet,
  ThermometerSnowflake,
  Wind,
  Thermometer,
  Brain,
  Activity,
  Clock,
  Timer,
  Eye,
  Beaker,
  Check,
  X,
  Loader2,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Card = ({ className, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={cn(
      "rounded-xl border shadow-lg backdrop-blur-xl",
      "hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500",
      className
    )}
  >
    {children}
  </motion.div>
);

const Label = ({ className, htmlFor, children }) => (
  <label htmlFor={htmlFor} className={cn("text-sm font-medium", className)}>
    {children}
  </label>
);

const Input = ({ className, ...props }) => (
  <input
    {...props}
    className={cn(
      "flex h-10 w-full rounded-md border px-3 py-2 text-sm",
      "focus:outline-none focus:ring-2 focus:ring-purple-500/50",
      "transition-all duration-200 ease-in-out",
      "placeholder:text-gray-400",
      className
    )}
  />
);

const TextArea = ({ className, ...props }) => (
  <textarea
    {...props}
    className={cn(
      "flex w-full rounded-md border px-3 py-2 text-sm",
      "focus:outline-none focus:ring-2 focus:ring-purple-500/50",
      "transition-all duration-200 ease-in-out",
      "placeholder:text-gray-400",
      "min-h-24 resize-y",
      className
    )}
  />
);

const Button = ({ className, children, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    {...props}
    className={cn(
      "inline-flex items-center justify-center rounded-md font-medium",
      "transition-colors focus:outline-none focus:ring-2",
      "h-12 px-6 py-2",
      className
    )}
  >
    {children}
  </motion.button>
);

const RadioGroup = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const RadioGroupItem = ({ id, value, checked, onChange, className }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <input
      type="radio"
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <motion.div
      className={cn(
        "w-5 h-5 rounded-full border-2 cursor-pointer",
        "transition-colors duration-200",
        checked ? "border-purple-500 bg-purple-500/20" : "border-gray-600",
        className
      )}
      animate={{
        scale: checked ? [1, 1.1, 1] : 1,
        backgroundColor: checked ? "rgba(147, 51, 234, 0.2)" : "transparent"
      }}
    >
      {checked && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-1 rounded-full bg-purple-500"
        />
      )}
    </motion.div>
  </motion.div>
);

export const PatientSymptomForm = () => {
  const [formData, setFormData] = useState({
    dehydration: "no",
    acidious: "no",
    cold: "no",
    cough: "no",
    headache: "no",
    body_pain: "no",
    vomiting: "no",
    diarrhea: "no",
    yellow_eye_color: "no",
    temperature: "",
    urine_color: "",
    other_symptoms: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleRadioChange = (fieldName, value) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const calculateProgress = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(value => value !== "").length;
    return (filledFields / totalFields) * 100;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ProgressBar = () => (
    <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${calculateProgress()}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );

  return (
    <div className="min-h-screen  p-6 overflow-hidden">
      <Card className="max-w-2xl mx-auto bg-[#1E1E2E]/60 border-[#2A2A3C]">
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-3 mb-8"
          >
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500">
              Patient Symptoms Form
            </h1>
            <p className="text-gray-400">Please indicate if you're experiencing any of these symptoms</p>
            <ProgressBar />
          </motion.div>

          <div className="space-y-4">
            {[
              { name: "dehydration", icon: <Droplet className="w-5 h-5" />, label: "Dehydration" },
              { name: "acidious", icon: <Beaker className="w-5 h-5" />, label: "Acidious" },
              { name: "cold", icon: <ThermometerSnowflake className="w-5 h-5" />, label: "Cold" },
              { name: "cough", icon: <Wind className="w-5 h-5" />, label: "Cough" },
              { name: "headache", icon: <Brain className="w-5 h-5" />, label: "Headache" },
              { name: "body_pain", icon: <Activity className="w-5 h-5" />, label: "Body Pain" },
              { name: "vomiting", icon: <Clock className="w-5 h-5" />, label: "Vomiting" },
              { name: "diarrhea", icon: <Timer className="w-5 h-5" />, label: "Diarrhea" },
              { name: "yellow_eye_color", icon: <Eye className="w-5 h-5" />, label: "Yellow Eye Color" },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group rounded-xl border border-transparent",
                  "hover:border-purple-500/20 hover:bg-purple-500/5",
                  "p-4 transition-all duration-300"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.span
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-purple-500"
                    >
                      {field.icon}
                    </motion.span>
                    <Label className="text-gray-200 font-medium">{field.label}</Label>
                  </div>
                  <RadioGroup className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="yes"
                        id={`${field.name}-yes`}
                        checked={formData[field.name] === "yes"}
                        onChange={() => handleRadioChange(field.name, "yes")}
                      />
                      <Label htmlFor={`${field.name}-yes`} className="text-gray-300 flex items-center gap-2">
                        Yes <Check className="w-4 h-4 text-green-500" />
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="no"
                        id={`${field.name}-no`}
                        checked={formData[field.name] === "no"}
                        onChange={() => handleRadioChange(field.name, "no")}
                      />
                      <Label htmlFor={`${field.name}-no`} className="text-gray-300 flex items-center gap-2">
                        No <X className="w-4 h-4 text-red-500" />
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className={cn(
                "group rounded-xl border border-transparent",
                "hover:border-purple-500/20 hover:bg-purple-500/5",
                "p-4 transition-all duration-300"
              )}
            >
              <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center space-x-3">
                  <motion.span
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-purple-500"
                  >
                    <Thermometer className="w-5 h-5" />
                  </motion.span>
                  <Label htmlFor="temperature" className="text-gray-200 font-medium">
                    Temperature (°F)
                  </Label>
                </div>
                <Input
                  id="temperature"
                  type="number"
                  step="0.1"
                  className="bg-[#1E1E2E]/60 border-[#2A2A3C] text-white w-32"
                  value={formData.temperature}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className={cn(
                "group rounded-xl border border-transparent",
                "hover:border-purple-500/20 hover:bg-purple-500/5",
                "p-4 transition-all duration-300"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <motion.span
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-purple-500"
                  >
                    <Droplet className="w-5 h-5" />
                  </motion.span>
                  <Label htmlFor="urine_color" className="text-gray-200 font-medium">
                    Urine Color
                  </Label>
                </div>
                <Input
                  id="urine_color"
                  className="bg-[#1E1E2E]/60 border-[#2A2A3C] text-white w-32"
                  value={formData.urine_color}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className={cn(
                "group rounded-xl border border-transparent",
                "hover:border-purple-500/20 hover:bg-purple-500/5",
                "p-4 transition-all duration-300"
              )}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <motion.span
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-purple-500"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </motion.span>
                  <Label htmlFor="other_symptoms" className="text-gray-200 font-medium">
                    Other Symptoms
                  </Label>
                </div>
                <TextArea
                  id="other_symptoms"
                  className="bg-[#1E1E2E]/60 border-[#2A2A3C] text-white"
                  value={formData.other_symptoms}
                  onChange={handleInputChange}
                  placeholder="Please describe any other symptoms you may be experiencing..."
                  rows={4}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full relative overflow-hidden",
                "bg-gradient-to-r from-purple-600 to-indigo-600",
                "hover:from-purple-500 hover:to-indigo-500",
                "text-white text-lg font-medium",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </span>
              ) : submitSuccess ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-5 h-5" />
                  Submitted Successfully!
                </motion.span>
              ) : (
                "Submit Symptoms"
              )}
            </Button>
          </motion.div>
        </form>
      </Card>
    </div>
  );
};

export default PatientSymptomForm;
