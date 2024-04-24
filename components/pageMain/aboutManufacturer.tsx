import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import * as styles from "../../styles/styles";

type AboutManufacturerProps = {};

const AboutManufacturer: React.FC<AboutManufacturerProps> = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          <Typography
            variant="h5"
            component="h2"
          >
            О производителе Arbonia
          </Typography>
          <Box marginTop="20px" />
          <Typography sx={{ ...styles.standardText }}>
            Более шестидесяти лет назад была заложена основа компании Arbonia, начавшей с производства отопительных систем. Со временем Arbonia превратилась в ведущего производителя в сфере жилищного и промышленного строительства, предлагая высококачественные решения. Неизменными остаются наши методы работы: клиентоориентированность и предоставление эффективных решений. Мы уделяем особое внимание качеству упаковки и долговечности продукции, что соответствует современным высоким стандартам. Клиентам предлагается широкий выбор дизайна и цвета, что подтверждается многочисленными наградами.
          </Typography>
          <Typography sx={{ ...styles.standardText }} marginTop="10px">
            Arbonia Riesa была основана в 1991 году в Рейзе, где на базе старого сталелитейного завода было налажено производство трубчатых радиаторов и конвекторов. В 1992 году началось производство нагревательных стенок, а в 1994 — радиаторов для ванных комнат. В 2010 году производство переместилось в Чехию.
          </Typography>
          <Typography sx={{ ...styles.standardText }} marginTop="10px">
            В России компанию представляет "АФГ РУС". В 2016 году Arbonia отметила 25-летие, подтверждая свой статус лидера в индустрии.
          </Typography>
          <Typography sx={{ ...styles.standardText }} marginTop="10px" marginBottom="10px">
            Трубчатые радиаторы отопления производятся на заводе в городе Стршибро (Stříbro), Чехия.
          </Typography>
          <div className={"iframeContainer"}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104971.25940655338!2d12.908647305941244!3d49.74513818698379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a9a93dc7d9863%3A0x7e4711aedffa7546!2zU3TFmcOtYnJvLCAzNDkgMDEgU3TFmcOtYnJvLCBDemVjaGlh!5e0!3m2!1sen!2srs!4v1713897412851!5m2!1sen!2srs" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <img
            loading="lazy"
            style={{ borderRadius: "10px", }}
            src="/images/arbonia-manufacturer.jpg"
            width={"800px"}
            height={"465px"}
            sizes="400px,800px"
            alt="Производитель радиаторов Arbonia"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutManufacturer;
