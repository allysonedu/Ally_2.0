import { FidgetSpinner } from 'react-loader-spinner';

import { Container } from './styles';

export const LoaderAlly = () => {
  return (
    <Container>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={[
          'rgba(39,245,238,0.8)',
          'rgba(39,245,238,1)',
          'rgba(39,245,238,1)',
        ]}
        backgroundColor="rgba(3, 89, 86,1 )"
      />
    </Container>
  );
};
