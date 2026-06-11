import styled from "styled-components";
import { theme } from "@/components/libs/theme";

export const SignupContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${theme.colors.background};
  width: 100%;
  padding: 0 ${theme.spacing.md};

  img {
    display: block;
    max-width: 50%;
    height: auto !important;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    img {
      max-width: 45%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    justify-content: space-around;

    img {
      max-width: 280px;
      order: 2;
      align-self: center !important;
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
    gap: ${theme.spacing.xl};

    img {
      display: none;
    }
  }
`;

export const FormSection = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.lg};

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;

export const FormHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  text-align: center;
  font-family: ${theme.fonts.family};

  h1 {
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.sizes.xxl};
  }

  p {
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.sizes.md};
    color: ${theme.colors.textMuted};
  }

  a {
    color: ${theme.colors.textMuted};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: ${theme.fonts.sizes.xl};
    }
    p {
      font-size: ${theme.fonts.sizes.sm};
    }
  }
`;

export const GoogleBtn = styled.button`
  gap: ${theme.spacing.sm};
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.sizes.lg};
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.white.light};
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.white.light};
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
  max-width: 320px;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${theme.colors.white.normal};
  }

  &:active {
    transform: scale(0.98);
    background: rgba(255, 255, 255, 0.15);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    font-size: ${theme.fonts.sizes.md};
    padding: ${theme.spacing.sm};
  }
`;