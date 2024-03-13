import CashbookLayout from "@/components/Layout/Cashbook/CashbookLayout";
import { TopContainer } from "@/components/Layout/Styled/MonthlyStyled";
import DigitalPanel from "@/page/MonthlyPlanner/components/DigitalPanel/DigitalPanel";
import styled from "styled-components";

const WeeklyPlannerView = ({ year, month, week, page }) => {
  return (
    <CashbookLayout>
      <TopContainer>
        <WeeklyCostContainer></WeeklyCostContainer>
        <CategoryContainer></CategoryContainer>
      </TopContainer>
    </CashbookLayout>
  );
};

const WeeklyCostContainer = styled.div``;

const CategoryContainer = styled.div``;

export default WeeklyPlannerView;
