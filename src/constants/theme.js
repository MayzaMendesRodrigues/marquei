// constants/theme.js
const COLOR_GRADIENTE = {
    pinkPurple: {
        colors: ['#F5B7CA', '#A83F98', '#81017F'],
        locations: [0, 0.7, 1],
        start: { x: 0, y: 0 }, 
        end: { x: 1, y: 1 },


    }

};
const COLORS = {
    red: '#DF5951',
    blue: '#0D6EFD',
    white: '#ffffff',
    grayLetter: '#777777',
    gray2: '#717f7f',
    gray3: '#a0a0a0',
    gray4: '#e4e4e4',
    gray5: '#f1f5f4',
    purple: '#4F2A7D',
    black: '#161515'
};

const FONT_SIZE = {
    xsm: 11,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 64,
};

const SPACING = {
    xsm: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

const BORDER_RADIUS = {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 20,
};

const SHADOWS = {
    small: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5.5,
        elevation: 10,
    },
};

const FONT_WEIGHTS = {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
};

const Z_INDEX = {
    low: 0,
    medium: 100,
    high: 200,
    overlay: 300,
};


export { COLORS, FONT_SIZE, SPACING, BORDER_RADIUS, SHADOWS, FONT_WEIGHTS, Z_INDEX, COLOR_GRADIENTE};
