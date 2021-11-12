export const themeObject = (
    {
        palette: {
            primary: {
                main: '#ef5350',
            },
            secondary: {
                main: '#ffb74d',
            },
        },
        typography: {
            fontFamily: [
                'BedsteadRegular',
                'Roboto'
            ].join(',')
        }
    }

)

export const paperTransitionStyle = {
    transition: "all .4s ease-in-out",
    "&:hover": {
        backgroundColor: "#ef5350",
        color: 'white'
    }
}