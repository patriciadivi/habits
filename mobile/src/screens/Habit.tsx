import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView, View, Text, Alert} from "react-native";
import dayjs from "dayjs";

import { api } from "../lib/axios";

import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { Loading } from "../components/Loading";
import { Checkbox } from "../components/Checkbox";

interface Params {
  date: string;
}

interface DayInfoProps {
  completedHabits: Array<string>;
  possibleHabits: Array<{
    id: string,
    title: string,
  }>;
}

export function Habit() {
  const [loading, setLoading] = useState(true)
  const [dayInfo, setDayInfo ] = useState<DayInfoProps | null >(null)
  const [completedHabits, setCompletedHabits] = useState<string[]>([])

  const route = useRoute()
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format('dddd');
  const dayAndMonth = parsedDate.format('DD/MM');

  async function fatchHabits() {
    try {
      setLoading(true)
      const response = await api.get('/day', { params: { date } });
      console.log(response.data)
      setDayInfo(response.data)
      setCompletedHabits(response.data.completedHabits)
      
    } catch (error) {
      console.log(error);
      Alert.alert('ops', 'Não foi possível carregar as informações dos hábitos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fatchHabits()
  }, [])
  
  if (loading) {
    return (
      <Loading />
    )
  }
  

  return (
    <View className="flex-1 bg-background px-8 pt-16">
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
        >

        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={30} />

        <View className="mt-6">

          {
            dayInfo?.possibleHabits &&
              dayInfo?.possibleHabits.map((habit) => {
                return (
                  <Checkbox
                    key={habit.id}
                    title={habit.title}
                    checked={completedHabits?.includes(habit.id)}
                  />
                )
              })
          }

        </View>

      </ScrollView>

    </View>
  )
}