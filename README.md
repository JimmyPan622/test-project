# 需求

Vitest 需驗證baseStore.testFunction執行完畢，是否baseStore.someValue狀態為true

# 發生問題

1. 可能因為store建立了useApi這個composable的實體，導致Vitest無法順利將mock fn覆蓋掉store中的useApi實體。
2. 當前程式碼的mock fn可能有誤，導致覆蓋不成功。
