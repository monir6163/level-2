interface IDeveloper<T, B> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    relasedYear: string;
  };
  smartWatch: T;
  bike?: B;
}
type PoorDeveloperWatch = {
  heartRate: string;
  stopWatch: boolean;
};
type RichDeveloperWatch = {
  heartRate: string;
  stopWatch: boolean;
  callSupport: boolean;
  aiFeature: boolean;
};
const poorDeveloper: IDeveloper<PoorDeveloperWatch> = {
  name: "Monir",
  salary: 10000,
  device: {
    brand: "Dell",
    model: "del123",
    relasedYear: "2013",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
};

const richDeveloper: IDeveloper<RichDeveloperWatch> = {
  name: "Monir",
  salary: 10000,
  device: {
    brand: "Dell",
    model: "del123",
    relasedYear: "2013",
  },
  smartWatch: {
    heartRate: "200",
    stopWatch: true,
    callSupport: true,
    aiFeature: true,
  },
};
