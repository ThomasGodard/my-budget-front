/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Transaction({ name, company, email, vat }) {
  return (
    <SoftBox key={name} component="li"
             display="flex"
             justifyContent="space-between"
             alignItems="flex-start"
             bgColor="grey-100"
             borderRadius="lg"
             p={3}
             mb={1}
             mt={2}>
      <SoftBox width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <SoftBox display="flex" alignItems="center">
          <SoftBox mr={2}>
            <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
          </SoftBox>
          <SoftBox display="flex" flexDirection="column">
            <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {name}
            </SoftTypography>
            <SoftTypography variant="caption" color="text">
              {'Paypal'}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftTypography variant="button" fontWeight="medium" textGradient>
          {'150'}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of Bill
Transaction.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Transaction.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired
};

export default Transaction;
