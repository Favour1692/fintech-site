import { ReactElement } from "react";

export interface Nav {
  id: number;
  href: string;
  title: string;
}

export interface Landingbg {
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundRepeat: string;
}

export interface Bgoverlay {
  backgroundImage: string;
  backgroundBlendMode: string;
  backgroundSize?: string;
  backgroundRepeat: string;
}

export interface Featurecard {
  id: number;
  icon: ReactElement;
  text: string;
}

export interface How {
  id: number;
  icon: ReactElement;
  step: string;
  title: string;
  description: string;
}

export interface MobileMenuProps {
  open: boolean;
  handleClick: () => void;
}

export interface Social {
  id: number;
  logo: ReactElement;
  href: string;
}
