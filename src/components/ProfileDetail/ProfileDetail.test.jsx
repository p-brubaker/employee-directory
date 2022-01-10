import { screen, render } from '@testing-library/react';
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';

it('should render the profile detail page', async () => {
  const { container } = render(
    <ProfileDetail
      profile={{
        name: 'Paul',
        email: 'pbrubak@gmail.com',
        birthday: '1111/11/11',
        bio: 'Hi!',
      }}
    />
  );

  screen.getByText('name: Paul');
  expect(container).toMatchSnapshot();
});
