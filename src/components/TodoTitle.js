import React, { memo } from "react";

import { Heading } from "@chakra-ui/react";

export const TodoTitle = memo(({ title, as, fontsize, mt }) => {
  return (
    <Heading mt={mt} as={as} fontSize={fontsize} w="full">
      {title}
    </Heading>
  );
});
