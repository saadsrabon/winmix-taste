import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

// Elegant Lotus/Flower icon for Mission
export const LotusIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 6C24 6 28 14 28 22C28 30 24 38 24 38C24 38 20 30 20 22C20 14 24 6 24 6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18C12 18 18 20 24 24C30 28 38 32 38 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 18C36 18 30 20 24 24C18 28 10 32 10 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12C8 12 14 16 18 24C22 32 24 42 24 42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 12C40 12 34 16 30 24C26 32 24 42 24 42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Sun/Radiance icon for Goodness
export const GoodnessIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="M24 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 38V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 24H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 24H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9.86 9.86L14.1 14.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M33.9 33.9L38.14 38.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9.86 38.14L14.1 33.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M33.9 14.1L38.14 9.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Spice/Leaf icon for Delicacy
export const DelicacyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 44C24 44 8 32 8 18C8 10 14 4 24 4C34 4 40 10 40 18C40 32 24 44 24 44Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 44V24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 24C24 24 16 20 14 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 30C24 30 30 26 34 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Handshake/Trust icon
export const TrustIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 24L12 16L20 24L28 16L36 24L44 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 32C16 32 20 36 24 36C28 36 32 32 32 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
    <path
      d="M10 40L14 36H34L38 40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Wheat/Grain icon for Purity
export const WheatIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M24 44V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M24 20C24 20 18 14 18 8C18 4 20 2 24 2C28 2 30 4 30 8C30 14 24 20 24 20Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 28C24 28 16 26 12 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 28C24 28 32 26 36 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 36C24 36 14 34 10 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 36C24 36 34 34 38 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Heart with hands for Care
export const CareIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 42L6 24C2 20 2 14 6 10C10 6 16 6 20 10L24 14L28 10C32 6 38 6 42 10C46 14 46 20 42 24L24 42Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 30L8 34L12 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 30L40 34L36 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Store icon
export const StoreIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 18V42H42V18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6L8 18H40L44 6H4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 18C16 22 13 24 10 24C7 24 4 22 4 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 18C28 22 25 24 22 24C19 24 16 22 16 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 18C40 22 37 24 34 24C31 24 28 22 28 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 42V32H30V42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Delivery truck icon
export const DeliveryIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 12H26V34H2V12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 18H38L46 26V34H26V18Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="38" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M14 34H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Partnership/Handshake icon
export const PartnershipIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 28L12 20L18 26L26 18L32 24L40 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 36H18L24 30L30 36H40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M20 44L24 40L28 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Natural leaf icon
export const NaturalIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 42C6 42 6 26 16 16C26 6 42 6 42 6C42 6 42 22 32 32C22 42 6 42 6 42Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 42C6 42 18 30 26 22C34 14 42 6 42 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 32C16 32 22 28 26 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Shield check icon
export const ShieldIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 4L6 12V22C6 34 14 42 24 46C34 42 42 34 42 22V12L24 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 24L22 30L32 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Star/authentic icon
export const AuthenticIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 4L28.5 18H44L31.5 27L36 42L24 32L12 42L16.5 27L4 18H19.5L24 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
  </svg>
);
