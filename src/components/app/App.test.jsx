/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import { ThemeProvider } from '../../state/ThemeProvider';

const server = setupServer(
    rest.get(
        'https://www.breakingbadapi.com/api/characters',
        (req, res, ctx) => {
            return res(ctx.json([
                {
                    'char_id': 1,
                    'name': 'Walter White',
                    'birthday': '09-07-1958',
                    'occupation': [
                        'High School Chemistry Teacher',
                        'Meth King Pin'
                    ],
                    'img': 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
                    'status': 'Presumed dead',
                    'nickname': 'Heisenberg',
                    'appearance': [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    'portrayed': 'Bryan Cranston',
                    'category': 'Breaking Bad',
                    'better_call_saul_appearance': []
                },
                {
                    'char_id': 2,
                    'name': 'Jesse Pinkman',
                    'birthday': '09-24-1984',
                    'occupation': [
                        'Meth Dealer'
                    ],
                    'img': 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
                    'status': 'Alive',
                    'nickname': 'Cap n\' Cook',
                    'appearance': [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    'portrayed': 'Aaron Paul',
                    'category': 'Breaking Bad',
                    'better_call_saul_appearance': []
                },
                {
                    'char_id': 3,
                    'name': 'Skyler White',
                    'birthday': '08-11-1970',
                    'occupation': [
                        'House wife',
                        'Book Keeper',
                        'Car Wash Manager',
                        'Taxi Dispatcher'
                    ],
                    'img': 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
                    'status': 'Alive',
                    'nickname': 'Sky',
                    'appearance': [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    'portrayed': 'Anna Gunn',
                    'category': 'Breaking Bad',
                    'better_call_saul_appearance': []
                }]));
        }
    )
);

describe('Breaking bad display mode page', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('displays a list of breaking bad characters with styling based on checkbox', async () => {
        const homePage = render(
            <ThemeProvider >
                <App />
            </ThemeProvider >);
        expect(homePage).toMatchSnapshot();

        const hdr = screen.getByLabelText('hdr');
        expect(hdr).toHaveClass('headLight');

        const toggle = await screen.findByRole('checkbox');
        expect(toggle).toBeVisible();

        //test for the <ul> that contains the BB characters:
        const charList = await screen.findAllByRole('list', {
            name: 'characters',
        });
        expect(charList).toHaveLength(3);

        fireEvent.click(toggle);
        expect(hdr).toHaveClass('headParty');

    });
});
