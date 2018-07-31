import React from 'react';

import ContactForm from '../components/contact'

describe('Test', () => {
    it('should render without throwing an error', async function() {
        await shallow(<ContactForm />)
      });
})