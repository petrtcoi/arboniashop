import React from "react";
import { Box, Typography, Grid, Hidden } from "@mui/material";
import Link from "next/link";

import * as styles from "../../styles/styles";

type PageTitleProps = {
  header?: string;
  subheader?: string;
  breadcrumbs?: { title: string; link: string }[];
};

const PageTitle: React.FC<PageTitleProps> = ({
  header,
  subheader,
  breadcrumbs,
}) => {
  return (
    <Box
      paddingY={"10px"}
      paddingX={{ xs: "10px", md: "20px" }}
      sx={{ backgroundColor: "#f6f6f6", borderBottom: "1px solid #e5e5e5" }}
    >
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <Grid container justifyContent="space-between">
          <Grid item itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbs?.map((item, index) => {
              return index + 1 < breadcrumbs.length ? (
                <Box
                  key={index}
                  display="inline"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <Link href={item.link}>
                    <a style={{ textDecoration: "none" }} itemProp="item">
                      <Typography
                        sx={{ ...styles.smallTextThinLink }}
                        display="inline"
                        itemProp="name"
                      >
                        {item.title}
                      </Typography>
                      <meta
                        itemProp="position"
                        content={(index + 1).toString()}
                      />
                    </a>
                  </Link>
                  <Typography sx={{ ...styles.smallTextThin }} display="inline">
                    &nbsp;&nbsp;&gt;&nbsp;&nbsp;
                  </Typography>
                </Box>
              ) : (
                <Box key={index} display="inline">
                  <Typography sx={{ ...styles.smallText }} display="inline">
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Grid>
          <Grid item>
            <Hidden smDown>
              <Typography
                component="h2"
                sx={{ ...styles.smallTextBold }}
                textAlign="right"
              >
                {header}
              </Typography>
              <Typography
                component="h2"
                sx={{ ...styles.smallTextThin }}
                textAlign="right"
              >
                {subheader}
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
      ) : (
        <>
          <Typography
            component="h2"
            sx={{ ...styles.smallTextBold }}
            textAlign="right"
          >
            {header}
          </Typography>
          <Typography
            component="h2"
            sx={{ ...styles.smallTextThin }}
            textAlign="right"
          >
            {subheader}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default PageTitle;
