export const menuButtonDropDown = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#333333",
  cursor: "pointer",
};
export const menuButton = {
  paddingBottom: "6px",
  paddingTop: "6px",
  borderBottom: "1px solid white",
  transition: "all 0.6s ease",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: "500",
  color: "#333333",
  cursor: "pointer",
  "&:hover": {
    borderBottom: "1px solid #ef7d00",
  },
};
export const menuButtonPhone = {
  ...menuButton,
  textDecoration: "none",
};

export const footerTextBold = {
  fontSize: "12px",
  fontWeight: "600",
  lineHeight: "14px",
  color: "#000000",
};

export const footerText = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "14px",
  color: "#333333",
};

export const footerTextButton = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "16px",
  textDecoration: "none",
  color: "#333333",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
};

export const footerTextButtonUnderline = {
  ...footerTextButton,
  "&:hover": {
    textDecoration: "underline",
  },
};
