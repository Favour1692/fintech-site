import { ReactElement } from "react";

export interface nav {
  id: number;
  link: string;
  title: string;
}

export interface landingbg {
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
}

export interface bgoverlay {
  backgroundImage: string;
  backgroundBlendMode: string;
  backgroundSize: string;
  backgroundRepeat: string;
}

export interface featurecard {
  id: number;
  icon: ReactElement;
  text: string;
}

export interface how {
  id: number;
  icon: ReactElement;
  step: string;
  title: string;
  description: string;
}
