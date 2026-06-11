import { styled } from "styled-components";
import Link from "next/link";
import { theme } from "@/components/libs/theme";

const MenuBarContainer = styled.section`
color: ${theme.colors.text};
  background: ${theme.colors.grey.normal};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;

   &::-webkit-scrollbar {
    display: none;
  }

`;

const HeadSection = styled.section`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
  padding: 35px 8px;

  span {
    font-size: ${theme.fonts.sizes.lg};
    font-weight: ${theme.fonts.weights.semibold};
    white-space: nowrap;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
   gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  border-top: 1px solid ${theme.colors.white.darkActive};
  flex-shrink: 0;

`;

const MenuTitle = styled.p`
   color: ${theme.colors.textMuted};
  text-align: left;
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.sizes.sm};
  white-space: nowrap;
  overflow: hidden;
`;

const MenuItem = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  justify-content: start;
  padding: 15px;
  border-radius: ${theme.borderRadius.md};
  background: ${({ $isActive }) =>
    $isActive ? theme.colors.green.darkActive : "transparent"};
  transition: background 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    background: ${theme.colors.green.darkHover};
  }

  p,
  svg {
    color: white;
    white-space: nowrap;
  }
`;

const LogoutItem = styled.button`
  background: ${theme.colors.green.normal};
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 16px;
  border: none;
  outline: none;
  padding: 15px 30px;
  border-radius: 10px;

  &:hover {
    background: rgba(0, 224, 158, 0.62);
  }

  p,
  svg {
    color: white;
    white-space: nowrap;
  }
`;

export {
  MenuBarContainer,
  MenuSection,
  HeadSection,
  LogoutItem,
  MenuTitle,
  MenuItem,
};