/**
 * Template Literal
 */
type Younha = 'Lee Younha';

// Uppercase
type YounhaUpper = Uppercase<Younha>;

// Lowercase
type YounhaLower = Lowercase<YounhaUpper>;

// Capitalize
type YounhaCapital = Capitalize<YounhaLower>;

// Uncapitalize
type YounhaUnCapital = Uncapitalize<YounhaCapital>;