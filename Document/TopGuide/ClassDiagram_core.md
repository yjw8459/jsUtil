@startuml

class Country{
    + *PK countryCode: String
    +koreanCountryName: String
    +englishCountryName: String
    +localCountryName: String
}

class Currency{
    + *PK pk: CurrencyPK
    + koreanCurrencyName: String
    +englishCurrencyName: String
    +localCurrencyName: String    
    +currencySign: String
    +defaultCurrencyYn: String
}

class CurrencyPK{
    +currencyCode: String
    +countryCode: String
}

class GetCountriesIn{
    +ageIndex: Integer
    +itemsPerPage: Integer
    +sortColumn: String
    +sort: Direction
    +limitFrom: Integer
    +limitTo: Integer
    +total: Integer
    +keyword: String
    +excelHeader: List<String>
}

class GetCountriesOut{
    +countryCode: String
    +koreanCountryName: String
    +englishCountryName: String
    +localCountryName: String
}
class GetCurrenciesIn{

    + Integer pageIndex
    + Integer itemsPerPage
    
    + String sortColumn
    
    + Direction sort
    
    + Integer limitFrom
    
    + Integer limitTo
    
    + Integer total
    
    + String keyword

    + List<String> excelHeader
}
class GetCurrenciesOut{
    + currencyCode: String
    + countryCode: String 
    +  koreanCurrencyName: String
    +  englishCurrencyName: String
    +  localCurrencyName: String
    +  currencySign: String
    +  defaultCurrencyYn: String
    +  koreanCountryName: String
    +  englishCountryName: String
    +  localCountryName: String
}

class CountryController{
    -service: CountryService
--
    +  getCountry(countryCode: String): ResponseEntity<Country>
    + getCountries():ResponseEntity<List<Country>>
    + getCountriesPage(input: GetCountriesIn): ResponseEntity<Page<GetCountriesOut>>
    +  getCurrenciesPage(input: GetCurrenciesIn): ResponseEntity<Page<GetCurrenciesOut>>
}

class CountryService{
    #logger: Logger
    - countryRepository: CountryRepository
    - currencyRepository: CurrencyRepository
    -  countryMapper: CountryMapper
    -  currencyMapper: CurrencyMapper
    --
    +  getCurrenciesPage(input: GetCurrenciesIn): Page<GetCurrenciesOut>
    +  getCountriesPage(input: GetCountriesIn): Page<GetCountriesOut>
    +  getCountries(): List<Country>
    +  getCountry(CountryCode: String): Optional<Country>
}

class CountryRepository{
    findByCountryCode(CountryCode: String): Optional<Country>
    findAllByOrderByCountryCode(): void
}

class CurrencyRepository{
    findByCurrencyCode(CountryCode: String): Optional<Country>
    findAllByOrderByCurrency(): void
}

interface CountryMapper{
        findAllWithPage(input: GetCountriesIn): List<GetCountriesOut>

    findOneWithPageTotal(input: GetCountriesIn): int
}
interface CurrencyMapper{
    findAllWithPage(input: GetCurrenciesIn): List<GetCurrenciesOut>
    findOneWithPageTotal(input: GetCurrenciesIn): int
}

class SaveCountry{
    countryCode: String
    englishCountryName: String
    koreanCountryName: String
    localCountryName: String
}

class SaveCurrency{
    countryCode: String
    companyCode: String
    englishCurrencyName: String
    koreanCurrencyName: String
    localCurrencyName: String
    currencySign: String
    defaultCurrencyYn: String
}

CountryController --> CountryService
CountryController ..> SaveCountry
CountryController ..> SaveCurrency
CountryService ..> SaveCountry
CountryService ..> SaveCurrency
CountryService --> CountryRepository
CountryService --> CurrencyRepository
CountryService --> CountryMapper
CountryService --> CurrencyMapper
CurrencyPK --o Currency
CountryRepository ..> Country
CurrencyRepository ..> Currency
CountryMapper ..> GetCountriesIn
CountryMapper ..> GetCountriesOut
CurrencyMapper ..> GetCurrenciesIn
CurrencyMapper ..> GetCurrenciesOut


@enduml