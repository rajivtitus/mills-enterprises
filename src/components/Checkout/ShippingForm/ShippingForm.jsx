import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, TextField, InputLabel, Select, MenuItem } from "@material-ui/core";

import useStyles from "./shippingFormStyles";
import { commerce } from "../../../lib/commerce";

const ShippingForm = () => {
  const classes = useStyles();
  const { id: chktToken } = useSelector((state) => state.checkoutToken);
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ code, name }));
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ code, name }));

  const getShippingCountries = async (checkoutToken) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutToken);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const getShippingSubdivisions = async (checkoutToken, shippingCountry) => {
    const { subdivisions } = await commerce.services.localeListShippingSubdivisions(checkoutToken, shippingCountry);
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const getShippingOptions = async (checkoutToken, { country, region }) => {
    const options = await commerce.checkout.getShippingOptions(checkoutToken, {
      country,
      region,
    });
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    if (chktToken) getShippingCountries(chktToken);
  }, [chktToken]);

  useEffect(() => {
    if (chktToken && shippingCountry) getShippingSubdivisions(chktToken, shippingCountry);
  }, [chktToken, shippingCountry]);

  useEffect(() => {
    if (chktToken && shippingCountry && shippingSubdivision)
      getShippingOptions(chktToken, {
        country: shippingCountry,
        region: shippingSubdivision,
      });
  }, [chktToken, shippingCountry, shippingSubdivision]);

  return (
    <div>
      <form noValidate autoComplete="off">
        <Grid container className={classes.formGrid} spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField name="firstName" label="First Name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="lastName" label="Last Name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="email" label="Email Address" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="street" label="Street" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="city" label="City" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="postalCode" label="Postal Code" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="country">Country</InputLabel>
            <Select
              labelId="country"
              value={shippingCountry}
              fullWidth
              onChange={(e) => setShippingCountry(e.target.value)}
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.code} - {country.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="state">State</InputLabel>
            <Select
              labelId="state"
              value={shippingSubdivision}
              onChange={(e) => setShippingSubdivision(e.target.value)}
              fullWidth
            >
              {subdivisions.map((subdivision) => (
                <MenuItem key={subdivision.code} value={subdivision.code}>
                  {subdivision.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="shipping-option">Shipping Option</InputLabel>
            <Select
              labelId="shipping-option"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
              fullWidth
            >
              {shippingOptions.map((shippingOption) => (
                <MenuItem key={shippingOption.id} value={shippingOption.id}>
                  {shippingOption.description} - {shippingOption.price.formatted_with_symbol}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ShippingForm;