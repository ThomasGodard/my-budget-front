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

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import TopNavbar from "examples/Navbars/DashboardNavbar";

import TransactionFeed from "./components/TransactionFeed";

function Dashboard() {

  return (
    <DashboardLayout>
      <TopNavbar />
      <SoftBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TransactionFeed />
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
